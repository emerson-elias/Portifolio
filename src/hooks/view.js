// useMobileVhFix.js
import { useEffect } from 'react';

const useMobileVhFix = () => {
    useEffect(() => {
        // Função para calcular e definir a variável CSS --vh
        const setVhProperty = () => {
            // window.innerHeight pega a altura real do viewport em pixels,
            // incluindo ou excluindo as barras do navegador.
            const vh = window.innerHeight * 0.01;
            // Define a variável CSS --vh no elemento raiz (<html>) do documento
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        // Função de debounce para evitar que a função setVhProperty
        // seja chamada muitas vezes em rápida sucessão (ex: ao redimensionar a janela)
        const debounce = (func, delay) => {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), delay);
            };
        };

        // Cria uma versão "debouced" da nossa função setVhProperty
        const debouncedSetVhProperty = debounce(setVhProperty, 100); // 100ms de atraso

        // 1. Define o valor inicialmente ao carregar a página
        setVhProperty();

        // 2. Adiciona ouvintes de evento para atualizar a variável CSS:
        //    - 'resize': Para quando a janela muda de tamanho (orientação do celular, teclado virtual, etc.)
        //    - 'orientationchange': Para dispositivos que reportam isso separadamente (alguns iOS mais antigos)
        window.addEventListener('resize', debouncedSetVhProperty);
        window.addEventListener('orientationchange', debouncedSetVhProperty);

        // Função de limpeza (cleanup): Remove os ouvintes de evento
        // quando o componente que usa o hook é desmontado.
        return () => {
            window.removeEventListener('resize', debouncedSetVhProperty);
            window.removeEventListener('orientationchange', debouncedSetVhProperty);
        };
    }, []); // O array vazio [] garante que o useEffect rode apenas uma vez (no componentDidMount)
};

export default useMobileVhFix;