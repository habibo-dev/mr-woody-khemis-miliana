import { useState } from 'react';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';

export function OrderForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="order" className="py-24 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side - Info */}
          <div className="bg-secondary p-10 md:p-12 md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-black mb-4">Order Online</h3>
              <p className="text-gray-300 mb-8">Fill out the form and we'll prepare your order immediately.</p>
              
              <div className="space-y-6">
                <div>
                  <div className="text-primary font-bold text-sm mb-1">Working Hours</div>
                  <div className="font-medium">Everyday until 12:00 AM</div>
                </div>
                <div>
                  <div className="text-primary font-bold text-sm mb-1">Location</div>
                  <div className="font-medium">764G+PXR, Khemis Miliana</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <p className="text-sm text-gray-400 mb-4">Prefer WhatsApp?</p>
              <a 
                href="https://wa.me/213675151612" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors w-full"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-10 md:p-12 md:w-3/5">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-black text-secondary">Order Received!</h3>
                <p className="text-gray-600">We'll call you shortly to confirm your order.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  Place another order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Amine"
                      className="w-full px-4 py-3 rounded-xl bg-accent border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="06XX XX XX XX"
                      className="w-full px-4 py-3 rounded-xl bg-accent border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary">Your Order</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="E.g. 2x French Tacos, 1x Mega Pizza..."
                    className="w-full px-4 py-3 rounded-xl bg-accent border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary">Order Type</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="type" className="peer sr-only" defaultChecked />
                      <div className="text-center px-4 py-3 rounded-xl border border-gray-200 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary font-bold transition-all">
                        Takeaway
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="type" className="peer sr-only" />
                      <div className="text-center px-4 py-3 rounded-xl border border-gray-200 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary font-bold transition-all">
                        Delivery
                      </div>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Submit Order</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}