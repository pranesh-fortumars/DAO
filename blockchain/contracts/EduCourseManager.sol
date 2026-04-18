// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract EduCourseManager is Ownable {
    struct Course {
        uint256 id;
        string title;
        string syllabusHash; // IPFS hash
        address instructor;
        bool approved;
        uint256 createdAt;
    }

    uint256 public nextCourseId;
    mapping(uint256 => Course) public courses;
    mapping(address => bool) public authorizedInstructors;

    event CourseProposed(uint256 indexed id, string title, address indexed instructor);
    event CourseApproved(uint256 indexed id);
    event InstructorAuthorized(address indexed instructor);

    constructor(address initialOwner) Ownable(initialOwner) {}

    function authorizeInstructor(address instructor) public onlyOwner {
        authorizedInstructors[instructor] = true;
        emit InstructorAuthorized(instructor);
    }

    function proposeCourse(string memory title, string memory syllabusHash) public {
        require(authorizedInstructors[msg.sender], "Not an authorized instructor");
        uint256 courseId = nextCourseId++;
        courses[courseId] = Course({
            id: courseId,
            title: title,
            syllabusHash: syllabusHash,
            instructor: msg.sender,
            approved: false,
            createdAt: block.timestamp
        });
        emit CourseProposed(courseId, title, msg.sender);
    }

    function approveCourse(uint256 courseId) public onlyOwner {
        require(courseId < nextCourseId, "Course does not exist");
        courses[courseId].approved = true;
        emit CourseApproved(courseId);
    }

    function getCourse(uint256 courseId) public view returns (Course memory) {
        return courses[courseId];
    }
}
