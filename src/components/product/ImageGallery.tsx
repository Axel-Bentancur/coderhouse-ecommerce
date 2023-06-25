import { useState } from "react";
import { IProducts } from "../../interfaces/IProducts";

export default function ImageGallery({ product }: { product: IProducts }): JSX.Element {
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="items-start justify-center p-8 lg:w-1/2 md:flex">
      <div className="flex flex-col items-center justify-between h-[60vh] gap-2">
        <div className="flex-shrink-0">
          <img
            className="object-contain max-h-[calc(60vh-4rem)]"
            src={`${selectedImage}`}
            alt="Product"
          />
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {product.images.map((image) => (
            <div
              key={image}
              className={`cursor-pointer ${selectedImage === image ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handleImageClick(image)}
            >
              <img className="object-cover w-16 h-16" src={`${image}`} alt="Product" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
