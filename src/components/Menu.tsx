import { motion } from 'framer-motion';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'French Tacos',
    nameAr: 'طاكو',
    desc: 'Loaded with fries, cheese sauce, and your choice of meat.',
    price: '400 DZD',
    image: '/images/tacos.jpg',
    popular: true
  },
  {
    id: 2,
    name: 'Mega Pizza',
    nameAr: 'بيتزا ميغا',
    desc: 'Fresh dough, rich tomato sauce, and premium melting cheese.',
    price: '600 DZD',
    image: '/images/pizza.jpg',
    popular: true
  },
  {
    id: 3,
    name: 'Sub Sandwich',
    nameAr: 'ساندويتش',
    desc: 'Crispy baguette filled with fresh ingredients and signature sauces.',
    price: '350 DZD',
    image: '/images/sandwich.jpg',
    popular: false
  },
  {
    id: 4,
    name: 'Crispy Fries',
    nameAr: 'بطاطا مقلية',
    desc: 'Golden, perfectly salted fries. The perfect side.',
    price: '150 DZD',
    image: '/images/fries.jpg',
    popular: false
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Notre Menu / قائمة الطعام</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-secondary mb-4">Popular Choices</h3>
          <p className="text-gray-600">Discover our most loved items, made fresh to order with premium ingredients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    POPULAR
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-display font-bold text-xl text-secondary">{item.name}</h4>
                    <span className="text-sm text-gray-500 font-medium">{item.nameAr}</span>
                  </div>
                  <span className="font-bold text-primary text-lg">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{item.desc}</p>
                <button className="w-full bg-accent hover:bg-primary hover:text-white text-secondary font-semibold py-3 rounded-xl transition-colors">
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}