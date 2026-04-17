import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Info, 
  Plus, 
  Code2, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

const CreateProposal = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      <div className="text-center space-y-4">
        <h1 className="text-5xl">Initiate Proposal</h1>
        <p className="text-slate-500 font-medium max-w-xl mx-auto">
          Share your vision with the community. Ensure your proposal is clear, 
          concise, and technically sound before submission.
        </p>
      </div>

      <div className="flex items-center justify-between relative px-2">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-col items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${step >= s ? 'bg-primary-500 border-primary-400 shadow-lg shadow-primary-500/20' : 'bg-slate-900 border-white/5 text-slate-700'}`}>
              <span className="font-bold">{s}</span>
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${step >= s ? 'text-primary-400' : 'text-slate-700'}`}>
              {s === 1 ? 'Details' : s === 2 ? 'Actions' : 'Review'}
            </span>
          </div>
        ))}
      </div>

      <motion.div 
        key={step}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-10 border-white/5"
      >
        {step === 1 && (
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Proposal Title</label>
              <input 
                type="text" 
                placeholder="e.g. Allocation of Treasury funds for Security Audit" 
                className="input-field text-xl"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Description (Markdown Supported)</label>
              <textarea 
                rows={8}
                placeholder="Describe the problem, the solution, and the expected outcome..." 
                className="input-field resize-none"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <div className="bg-primary-500/5 border border-primary-500/10 p-6 rounded-2xl flex items-start gap-4">
              <Info className="text-primary-400 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white">Smart Contract Execution</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Add one or more contract calls that will be automatically executed if the proposal passes.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-primary-500/10 transition-colors">
                    <Code2 className="text-slate-400 group-hover:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold">Treasury Transfer</h5>
                    <p className="text-xs text-slate-500">Release ETH or ERC-20 tokens from the DAO treasury</p>
                  </div>
                </div>
                <Plus size={20} className="text-slate-700 group-hover:text-primary-500" />
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center border-dashed group hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center gap-2 text-slate-500 group-hover:text-white transition-colors">
                  <Plus size={20} />
                  <span className="font-bold uppercase tracking-widest text-xs">Custom Function Call</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 text-center py-10">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <ShieldAlert className="text-emerald-400" size={40} />
            </div>
            <div>
              <h3 className="text-2xl">Final Validation</h3>
              <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                Once submitted, you cannot edit the proposal. Please ensure all 
                transaction data is correct.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-slate-500 text-sm">Voting Period:</span>
                <span className="font-bold">7 Days</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-slate-500 text-sm">Quorum Required:</span>
                <span className="font-bold">400,000 GDAO</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-sm">Execution Delay:</span>
                <span className="font-bold">2 Days (Timelock)</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
          <button 
            onClick={() => setStep(s => Math.max(1, s - 1))}
            className="btn-secondary"
            disabled={step === 1}
          >
            Back
          </button>
          
          {step < 3 ? (
            <button 
              onClick={() => setStep(s => s + 1)}
              className="btn-primary"
            >
              Continue
              <ChevronRight size={20} />
            </button>
          ) : (
            <button className="btn-primary !bg-emerald-600 !from-emerald-600 !to-emerald-500 shadow-emerald-500/20">
              <Send size={20} />
              Submit to Blockchain
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CreateProposal;
