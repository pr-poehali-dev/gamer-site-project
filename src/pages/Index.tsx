import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<null | number>(null);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    document.title = 'Игровые Компьютеры | Купить Gaming PC в Москве | yebu.ru';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '🚀 Мощные игровые компьютеры от GalaxyPCs ⭐ RTX 4080/4090 ⭐ Intel i7/i9 ⭐ Быстрая сборка и доставка по Москве ⭐ Гарантия качества ⭐ Заказать в 1 клик!');
    }
  }, []);

  const products = [
    {
      id: 1,
      name: 'Orbitron Gaming Pro',
      price: '249,999 ₽',
      specs: 'RTX 4080 • i7-13700KF • 32GB DDR5 • 1TB NVMe',
      description: 'Мощная игровая станция для космических баталий',
      image: '/img/4adf92d5-e272-43e9-a3b0-bb3320b5a0d1.jpg'
    },
    {
      id: 2,
      name: 'Nebula Workstation',
      price: '189,999 ₽',
      specs: 'RTX 4070 • i5-13600K • 16GB DDR5 • 512GB NVMe',
      description: 'Оптимальный баланс производительности и цены',
      image: '/img/9eb03660-d98f-4b26-a9d1-3aceb0e7b450.jpg'
    },
    {
      id: 3,
      name: 'Starlight Ultra',
      price: '349,999 ₽',
      specs: 'RTX 4090 • i9-13900KS • 64GB DDR5 • 2TB NVMe',
      description: 'Абсолютная вершина игровой мощи',
      image: '/img/53c72ec1-ecbd-4606-969e-7f56521d66b2.jpg'
    }
  ];

  const handleOrder = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const message = `🖥️ Новая заявка!
📦 Товар: ${product.name}
💰 Цена: ${product.price}
👤 Имя: ${orderForm.name}
📞 Телефон: ${orderForm.phone}
💬 Сообщение: ${orderForm.message}`;

    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
    
    setSelectedProduct(null);
    setOrderForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-background/90">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GalaxyPCs
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Космические технологии
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ИГРОВЫЕ
              <br />
              КОМПЬЮТЕРЫ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Откройте врата в новую вселенную игр с нашими космическими игровыми станциями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Zap" className="mr-2 h-5 w-5" />
                Выбрать компьютер
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог космических станций</h2>
            <p className="text-xl text-muted-foreground">Выберите свой корабль для покорения игровых галактик</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40">
                <CardHeader className="pb-4">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Cpu" className="mr-2 h-4 w-4 text-primary" />
                      {product.specs}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{product.price}</div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    onClick={() => setSelectedProduct(product.id)}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Связь с базой</h2>
            <p className="text-xl text-muted-foreground">Готовы к запуску? Свяжитесь с нашей космической командой</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageSquare" className="mr-2 h-5 w-5 text-primary" />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                  <span>info@galaxypcs.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  <span>Москва, ул. Космическая, 42</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-card border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Оформить заказ
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedProduct(null)}
                >
                  <Icon name="X" className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                {products.find(p => p.id === selectedProduct)?.name}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={orderForm.name}
                  onChange={(e) => setOrderForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ваше имя"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  value={orderForm.message}
                  onChange={(e) => setOrderForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Дополнительные пожелания..."
                  rows={3}
                />
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                onClick={() => handleOrder(selectedProduct)}
                disabled={!orderForm.name || !orderForm.phone}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Icon name="Send" className="mr-2 h-4 w-4" />
                Отправить в Telegram
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Rocket" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GalaxyPCs
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 GalaxyPCs. Покоряем игровые вселенные вместе 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;