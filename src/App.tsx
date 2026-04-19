/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Youtube, 
  Palette 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Classes', href: '#classes' },
    { name: 'Order', href: '#order' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-white/80 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="serif-text text-2xl font-semibold tracking-widest text-primary">
            BLOOM STUDIO
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 text-[11px] tracking-[0.3em] uppercase font-medium text-neutral-500">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-neutral-100 px-6 py-8 flex flex-col space-y-4 text-center tracking-[0.2em] uppercase text-xs font-medium"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="py-2 text-neutral-600 active:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            alt="Floral Background" 
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1652346072098-cfc2e94d30e7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-inter text-6xl md:text-8xl font-light italic mb-2 leading-tight"
          >
            Life is a Bloom
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-2xl font-light mb-6 tracking-tight opacity-90"
          >
            당신의 순간을, 꽃으로 기록합니다
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-medium opacity-70"
          >
            Premium Floral Atelier & Studio
          </motion.p>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 text-white/60"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </header>

      {/* Philosophy Section */}
      <section id="story" className="py-24 md:py-48 bg-bg-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="serif-text text-3xl md:text-5xl mb-16 text-primary"
          >
            Our Philosophy
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-10 text-base md:text-xl leading-relaxed text-neutral-500 font-light italic"
          >
            <p>볼룸 스튜디오는 꽃이 지닌 본연의 선과 색채를 탐구합니다.</p>
            <p>단순한 장식을 넘어, 공간에 생명력을 불어넣고 소중한 순간의 감정을 시각적으로 형상화하는 작업을 지향합니다.</p>
            <p>우리는 계절의 변화를 가장 아름다운 순간에 포착하여, 당신의 일상에 우아한 여백과 향기를 선물합니다.</p>
          </motion.div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="serif-text text-3xl md:text-5xl mb-4 text-primary">One-day Atelier</h2>
            <p className="text-neutral-400 tracking-[0.2em] uppercase text-[10px] font-semibold">
              Discover your floral artistic senses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: 'Hand-tied Bouquet',
                desc: '자연스러운 프렌치 스타일의 꽃다발 제작법을 배웁니다. 스파이럴 기법의 기초부터 조화로운 컬러 믹스까지 경험해보세요.',
                img: 'https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Vase Arrangement',
                desc: '공간의 분위기를 바꿔주는 침봉 및 오아시스 센터피스 디자인을 다룹니다. 계절 소재의 라인감을 살리는 고급 기법을 제안합니다.',
                img: 'https://images.unsplash.com/photo-1602136303098-f5aa2b9c9df9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCVFQSVCRCU4MyVFQiU4QiVBNCVFQiVCMCU5Q3xlbnwwfDF8MHx8fDI%3D'
              },
              {
                title: 'Wedding Bouquet',
                desc: '가장 특별한 날을 위한 웨딩 부케 디자인 클래스입니다. 신부의 체형과 드레스에 어울리는 최상의 조화를 탐구합니다.',
                img: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fCVFQSVCRCU4MyVFQiU4QiVBNCVFQiVCMCU5Q3xlbnwwfDF8MHx8fDI%3D'
              }
            ].map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 bg-neutral-50 shadow-sm transition-transform duration-700 hover:shadow-xl">
                  <img 
                    alt={course.title} 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition duration-700 ease-in-out" 
                    src={course.img}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="serif-text text-2xl mb-3 tracking-wide">{course.title}</h3>
                <p className="text-neutral-500 text-sm mb-8 leading-relaxed font-light">{course.desc}</p>
                <button className="w-full py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-[0.2em] text-[10px] font-bold">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-20 shadow-sm border border-neutral-100"
          >
            <div className="text-center mb-16">
              <h2 className="serif-text text-3xl md:text-4xl mb-6 text-primary italic">Order Your Flowers</h2>
              <p className="text-neutral-400 text-sm font-light italic tracking-tight">
                특별한 순간을 위해 당신만을 위한 꽃을 디자인합니다.
              </p>
            </div>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-neutral-300 font-semibold mb-3 group-focus-within:text-primary transition-colors">
                    Date Selection
                  </label>
                  <input 
                    type="date" 
                    className="w-full bg-transparent border-b border-neutral-200 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-neutral-300 font-semibold mb-3">
                    Service Type
                  </label>
                  <div className="flex space-x-8 py-3">
                    {['Store Pickup', 'Delivery'].map((type) => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="service" 
                          className="w-4 h-4 border-neutral-200 text-primary focus:ring-primary/20 accent-primary" 
                        />
                        <span className="text-sm text-neutral-500 group-hover:text-primary transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.3em] text-neutral-300 font-semibold mb-3 group-focus-within:text-primary transition-colors">
                  Message & Special Requests
                </label>
                <textarea 
                  className="w-full bg-transparent border-b border-neutral-200 py-3 focus:outline-none focus:border-primary transition-all resize-none text-sm leading-relaxed" 
                  placeholder="받으시는 분의 취향이나 전하고 싶은 메시지를 적어주세요." 
                  rows={4}
                />
              </div>

              <div className="text-center pt-8">
                <button className="bg-primary text-white px-16 py-5 hover:bg-[#7a6d63] transition-colors duration-300 uppercase tracking-[0.3em] text-[11px] font-bold shadow-lg shadow-black/5">
                  Place Order Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="serif-text text-3xl md:text-5xl text-primary">Voices of Bloom</h2>
        </div>
        
        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1032 * 2] }} // Adjust based on total width
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex space-x-8 whitespace-nowrap px-4"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {[
                  {
                    name: 'Minhee K.',
                    rating: 5,
                    text: '"여자친구 생일 선물로 주문했는데 꽃의 색감이 너무 고급스러워서 정말 좋아했어요. 다음에도 꼭 볼룸에서 주문할게요."',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXuXRT4hyeudsT_XNpX0TzhNXuesBi0VrwrwuSzH1_48-g8yxMKPkRjN5xxFcypPZIKBnSE7wD4qGKmfewN0ZOErtr8MYnc0kGslgFkoKXGBD-ejiKkjsjXb1rjrLU9xu47sRjwJvqzs4wH0DIfEFlpqhd-IXYH_YDJA7cuJRsYfvKshxJxiK4ZVsIDewO9TICYP1pjy9qt3ToZA_Nov0V8iqDBGItQdpjD77XlF_wVwhXAYknS9wmxXFR7q4VXC37Da-QBgUvxA'
                  },
                  {
                    name: 'James L.',
                    rating: 5,
                    text: '"원데이 클래스 들었는데 기초부터 꼼꼼하게 알려주셔서 힐링되는 시간이었어요."',
                  },
                  {
                    name: 'Hanna S.',
                    rating: 4,
                    text: '"화이트데이 부케 주문했어요. 심플하면서도 단아한 느낌이 제 취향에 딱 맞았습니다. 퀄리티가 정말 다르네요."',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKGrHQ8bhA8P1dDSREMIGRtXmrRzBux28zsNlikexEDiB7zpevfplUcowIjXEKHKE3flKncGY1pPcDP77lIMQjN__hhmUjn3sw2lmVQ8aF06bgonVD8pazpo_2OPdvXqAhmbP6aOSHjpMtaT9PvAsnjsiMzqX5rgMTAxtZQy4OecYfN2dF4O9KUSgFrs1CQqDNA39jdmjDZjjm-97QwqEiJT0ttd8OFrK4qgtdUM3NmqrzUmOx_n6zxxTjWcpsVB6rtSvD_K30MQ'
                  },
                  {
                    name: 'Sangwoo P.',
                    rating: 5,
                    text: '"배송 서비스도 정말 친절하시고 요청 드린 시간에 정확히 맞춰주셨습니다."',
                  }
                ].map((review, idx) => (
                  <div 
                    key={idx}
                    className="flex-shrink-0 w-[300px] md:w-[400px] bg-bg-light p-8 rounded-sm border border-neutral-100 whitespace-normal"
                  >
                    {review.img && (
                      <img 
                        alt="Review" 
                        className="w-full h-48 object-cover mb-6 grayscale-[0.5] hover:grayscale-0 transition duration-500" 
                        src={review.img}
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <p className="text-sm italic leading-relaxed mb-8 text-neutral-600">
                      {review.text}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400">
                        {review.name}
                      </span>
                      <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={12} 
                            className={i < review.rating ? 'fill-accent text-accent' : 'text-neutral-200'} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Map Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-neutral-200 overflow-hidden shadow-sm"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.6878359582934!2d129.3121311769472!3d35.53671113789733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356632ae8b75be2d%3A0x99b3d0e110343199!2z7Jq47IKw6rWt7ZWZ7JuQ!5e0!3m2!1sko!2skr!4v1776503774752!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bloom Studio Map"
              ></iframe>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                <h2 className="serif-text text-4xl mb-12 text-primary">Connect with Us</h2>
                <div className="space-y-8 font-light text-neutral-500">
                  <div className="flex items-start space-x-5 group cursor-default">
                    <MapPin className="text-primary mt-1 transition-transform group-hover:translate-y-[-2px]" size={20} />
                    <p className="text-sm">서울특별시 강남구 신사동 123-45, 1층 볼룸 스튜디오</p>
                  </div>
                  <div className="flex items-start space-x-5 group cursor-default">
                    <Clock className="text-primary mt-1 transition-transform group-hover:translate-y-[-2px]" size={20} />
                    <div className="text-sm">
                      <p className="mb-1">Mon - Sat | 10:00 - 19:00</p>
                      <p>Sun | Reservation Only</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 group cursor-default">
                    <Phone className="text-primary mt-1 transition-transform group-hover:translate-y-[-2px]" size={20} />
                    <p className="text-sm">02-1234-5678</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <a 
                  href="#" 
                  className="inline-flex items-center space-x-4 bg-[#FEE500] text-[#3C1E1E] px-10 py-5 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
                >
                  <MessageCircle size={20} className="fill-[#3C1E1E]" />
                  <span className="text-xs uppercase tracking-tight">KakaoTalk Inquiry</span>
                </a>

                <div className="flex items-center space-x-12 pt-4">
                  {[
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Youtube, label: 'YouTube' },
                    { icon: Palette, label: 'Pinterest' }
                  ].map((social) => (
                    <a 
                      key={social.label}
                      href="#" 
                      className="text-neutral-300 hover:text-primary transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-neutral-100 text-center bg-white">
        <p className="serif-text text-2xl tracking-[0.4em] mb-6 text-primary font-medium opacity-80">
          BLOOM STUDIO
        </p>
        <p className="text-[10px] text-neutral-300 tracking-[0.2em] uppercase font-semibold">
          © 2026 BLOOM STUDIO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
