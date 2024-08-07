import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Cat, Heart, Info, Paw, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <motion.div 
        className="bg-purple-600 text-white py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
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
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="max-w-4xl mx-auto p-8">
        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <motion.img 
                  src={src}
                  alt={`Cute cat ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
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
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
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
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
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
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => setLikes(likes + 1)}
            className="group"
          >
            <Heart className="mr-2 h-5 w-5 group-hover:text-red-500 transition-colors" />
            Like This Page ({likes})
          </Button>
        </motion.div>
      </div>
      
      <motion.footer 
        className="bg-purple-600 text-white py-6 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg">© 2023 Cat Lovers United. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            {[Heart, Star, Paw].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.8, rotate: -15 }}
              >
                <Icon className="h-6 w-6" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
