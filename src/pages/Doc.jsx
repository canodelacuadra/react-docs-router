import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';

// Cargar lenguajes adicionales si lo deseas (ej: JavaScript, Python)
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-solarizedlight.css';

marked.setOptions({
    highlight: function (code, lang) {
        if (Prism.languages[lang]) {
            return Prism.highlight(code, Prism.languages[lang], lang);
        } else {
            return code; // sin resaltar si no se reconoce el lenguaje
        }
    },
    langPrefix: 'language-'
});

export default function Doc() {
    const { tema } = useParams();
    const [contenido, setContenido] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`/docs/${tema}.md`)
            .then((res) => {
                if (!res.ok) throw new Error('No encontrado');
                return res.text();
            })
            .then((text) => {
                setContenido(marked(text));
                setError(false);
            })
            .catch(() => {
                setContenido('');
                setError(true);
            });
    }, [tema]);

    if (error) {
        return (
            <main>
                <h1>Documento no encontrado</h1>
                <p>No se encontró el tema: <strong>{tema}</strong></p>
            </main>
        );
    }

    return (
        <main>
            <article dangerouslySetInnerHTML={{ __html: contenido }} />
        </main>
    );
}
