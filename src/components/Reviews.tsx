import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    id: 1,
    name: 'Amine B.',
    text: 'Best place to have delicious meal. The service is incredibly fast and the food is always hot and fresh.',
    rating: 5,
    date: '1 week ago'
  },
  {
    id: 2,
    name: 'Sarah M.',
    text: 'Les tacos kaml yhdro ❤️ Vraiment top, je recommande vivement. La sauce fromagère est incroyable.',
    rating: 5,
    date: '2 weeks ago'
  },
  {
    id: 3,
    name: 'Karim D.',
    text: 'Top service w mekla bnina. Best fast food in Khemis Miliana without a doubt.',
    rating: 5,
    date: '1 month ago'
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-display font-black text-secondary mb-4 text-balance">
              Loved by Locals
            </h2>
            <p className="text-gray-600 mb-6">
              Don't just take our word for it. See what our amazing customers in Khemis Miliana have to say.
            </p>
            <div className="flex items-center gap-4 p-6 bg-accent rounded-2xl border border-gray-100">
              <div className="text-5xl font-display font-black text-secondary">4.7</div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-500">Based on 28 reviews</div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REVIEWS.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-50 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-medium mb-6 relative z-10">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="font-bold text-secondary">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}