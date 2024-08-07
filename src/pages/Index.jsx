import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Cat, Heart, Info, Paw, Star, ArrowRight, Gift, Camera } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sleeping_cat_on_her_back.jpg/1200px-Sleeping_cat_on_her_back.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Cats_eyes_2007-2.jpg/1200px-Cats_eyes_2007-2.jpg",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [adoptionProgress, setAdoptionProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setAdoptionProgress(66), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! Meow-velous choice!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <motion.div 
        className="bg-purple-600 text-white py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M30 30c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0 20c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the World of Cats
          </motion.h1>
          <motion.p 
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore fascinating facts and popular breeds of our feline friends
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button variant="secondary" size="lg" className="group">
              <Cat className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" /> Learn More
              <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="mr-2 h-5 w-5 text-purple-500" />
                Daily Cat Fact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg italic">
                "Cats have over 20 vocalizations, including the purr, meow, chirp, and trill."
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Carousel className="mb-8">
            <CarouselContent>
              {catImages.map((src, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    className="relative overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={src}
                      alt={`Cute cat ${index + 1}`}
                      className="mx-auto object-cover w-full h-[400px]"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge variant="secondary" className="text-lg">
                        Meow-nificent!
                      </Badge>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
        
        <Tabs defaultValue="facts" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="facts">Feline Facts</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <TabsContent value="facts" key="facts">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Info className="mr-2 h-5 w-5 text-purple-500" />
                      Feline Facts
                    </CardTitle>
                    <CardDescription>Interesting tidbits about our furry friends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Cats have been domesticated for over 4,000 years.",
                        "An adult cat has 30 teeth.",
                        "Cats can jump up to six times their length.",
                        "A group of cats is called a "clowder".",
                        "Cats spend 70% of their lives sleeping."
                      ].map((fact, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center p-2 rounded-md hover:bg-purple-100 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Paw className="mr-2 h-4 w-4 text-purple-500" />
                          {fact}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="breeds" key="breeds">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="mr-2 h-5 w-5 text-purple-500" />
                      Popular Cat Breeds
                    </CardTitle>
                    <CardDescription>Some well-known feline friends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        { breed: "Siamese", description: "Known for their distinctive coloring and vocal nature." },
                        { breed: "Maine Coon", description: "One of the largest domestic cat breeds with a friendly personality." },
                        { breed: "Persian", description: "Recognized for their long fur and flat faces." },
                        { breed: "Bengal", description: "Wild-looking cats with leopard-like spots." },
                        { breed: "Sphynx", description: "Hairless cats known for their wrinkled skin." }
                      ].map(({ breed, description }, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start p-2 rounded-md hover:bg-purple-100 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Cat className="mr-2 h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold">{breed}:</span> {description}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-red-500" />
                Cat Adoption Progress
              </CardTitle>
              <CardDescription>Help us reach our goal of finding homes for 100 cats this month!</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={adoptionProgress} className="h-2 mb-2" />
              <p className="text-sm text-gray-600">66 out of 100 cats adopted</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleLike}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Heart className="mr-2 h-5 w-5 group-hover:text-red-500 transition-colors" />
              Like This Page ({likes})
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </motion.div>
      </div>
      
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_u4yrau.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', height: '100%' }}
            autoplay
          ></lottie-player>
        </div>
      )}

      <motion.footer 
        className="bg-purple-600 text-white py-8 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-4">© 2023 Cat Lovers United. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { Icon: Heart, label: "Love" },
              { Icon: Star, label: "Favorite" },
              { Icon: Paw, label: "Adopt" }
            ].map(({ Icon, label }, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="bg-white rounded-full p-3 mb-2">
                  <Icon className="h-6 w-6 text-purple-600 group-hover:text-pink-500 transition-colors" />
                </div>
                <span className="text-sm">{label}</span>
              </motion.div>
            ))}
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col items-center space-y-4">
            <Label htmlFor="email" className="text-lg">Subscribe to our Meow-sletter</Label>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-purple-900"
              />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </div>
          </form>
        </div>
      </motion.footer>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed bottom-4 right-4 rounded-full p-3 bg-purple-600 hover:bg-purple-700 transition-colors">
            <Camera className="h-6 w-6 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Your Cat Photo</DialogTitle>
            <DialogDescription>
              Upload a photo of your feline friend to our gallery!
            </DialogDescription>
          </DialogHeader>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <Button type="submit" onClick={() => toast.success("Photo uploaded successfully!")}>Upload</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
