import { Dispatch, SetStateAction } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface VariablesContextType {
  productData: Product[];
  setProductData: Dispatch<SetStateAction<Product[]>>;
};

export const defaultValue: VariablesContextType = {
  productData: [],
  setProductData: () => {},
};

export interface ProductModalProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
  };
  onClose: () => void;
};

export interface CreateModalProps {
  onClose: () => void;
  isOpen: boolean;
};