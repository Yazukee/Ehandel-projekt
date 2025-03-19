import ProductList from "@/components/ui/shared/product/product-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="Latest trend" limit={4} />
    </>
  );
};

export default HomePage;
