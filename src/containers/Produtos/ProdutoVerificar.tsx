import React from 'react';
import ProdutoPage from './Produto';

interface VerificarProps {
  verify: string;
}

const VerificarComponent: React.FC<VerificarProps> = ({ verify }) => {
  return <ProdutoPage />
};

export default VerificarComponent;
