
import { memo } from 'react';

export const SlowComponent = memo(() => {
  console.log('SlowComponent повторный рендеринг...');

  const now = performance.now();

  while (performance.now() - now < 1000) {
    // Искусственная задержка
  }

  return <p>Я очень медленное дерево компонентов.</p>;
});
