import { getAllProducts, getProductBySlug } from '@/lib/swell/products';
import Image from 'next/image';

export async function generateStaticParams() {
  const products: any = await getAllProducts();

  return products.map((product: any) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: any }) {
  const product = await getProductBySlug(params.slug);

  console.log(product.price);
  return (
    <div>
      <h1 className='font-bold text-6xl'>{product.name}</h1>
      <h3>${product.price}</h3>
      <p>{product.description}</p>

      <div>
        {/* <Image
          src={product.images[0].file.url}
          alt={'lol'}
          // key={idx}
          width={500}
          height={900}
        />
        ; */}
        {product.images.map((image: any, idx: any) => {
          // console.log(image.file.url);
          return (
            // <img
            //   src={image.file.url}
            //   alt={`Image ${idx}`}
            //   key={idx}
            //   width={500}
            //   height={900}
            // />
            <Image
              src={image.file.url}
              alt={`Image ${idx}`}
              key={idx}
              width={500}
              height={900}
              quality={100}
            />
          );
        })}
      </div>
    </div>
  );
}
