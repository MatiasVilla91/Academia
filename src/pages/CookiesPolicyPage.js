import React from 'react';
import { Container } from 'react-bootstrap';

const CookiesPolicyPage = () => {
  return (
    <Container className="mt-5">
      <h1>Política de Cookies</h1>
      
      <section>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas ciertos sitios web. Se utilizan para recordar tus preferencias, mejorar tu experiencia en línea y proporcionar información a los propietarios del sitio web.</p>
      </section>
      
      <section>
        <h2>2. Tipos de cookies que utilizamos</h2>
        <p>En nuestro sitio web utilizamos diferentes tipos de cookies para diversos fines:</p>
        <ul>
          <li><strong>Cookies esenciales:</strong> Estas cookies son imprescindibles para el funcionamiento básico de nuestro sitio web y no se pueden desactivar. Sin estas cookies, algunas partes de nuestro sitio no funcionarían correctamente.</li>
          <li><strong>Cookies de rendimiento:</strong> Estas cookies recopilan información sobre cómo los visitantes utilizan nuestro sitio web, por ejemplo, qué páginas son las más visitadas y si reciben mensajes de error. Esta información nos ayuda a mejorar el funcionamiento del sitio.</li>
          <li><strong>Cookies funcionales:</strong> Estas cookies permiten que nuestro sitio web recuerde las elecciones que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y proporcionan características mejoradas y más personalizadas.</li>
          <li><strong>Cookies de publicidad:</strong> Estas cookies se utilizan para ofrecer anuncios que son relevantes para ti y tus intereses. También se utilizan para limitar la cantidad de veces que ves un anuncio y para ayudar a medir la efectividad de las campañas publicitarias.</li>
        </ul>
      </section>
      
      <section>
        <h2>3. Cómo utilizamos las cookies</h2>
        <p>Las cookies en nuestro sitio web se utilizan para:</p>
        <ul>
          <li>Mejorar el rendimiento y la funcionalidad del sitio web.</li>
          <li>Entender mejor tus preferencias y personalizar el contenido y los anuncios que ves.</li>
          <li>Realizar análisis y obtener datos estadísticos sobre cómo se utiliza nuestro sitio web.</li>
          <li>Facilitar el proceso de inicio de sesión y mejorar la seguridad.</li>
        </ul>
      </section>
      
      <section>
        <h2>4. Gestión de cookies</h2>
        <p>Puedes gestionar las cookies a través de la configuración de tu navegador. La mayoría de los navegadores te permiten rechazar o aceptar cookies. También puedes eliminar las cookies almacenadas en tu dispositivo. Para obtener más información sobre cómo gestionar las cookies, consulta <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.</p>
        <p>Ten en cuenta que si decides bloquear o eliminar las cookies, algunas partes de nuestro sitio web pueden no funcionar correctamente.</p>
      </section>
      
      <section>
        <h2>5. Cambios en nuestra política de cookies</h2>
        <p>Podemos actualizar esta política de cookies de vez en cuando para reflejar cambios en las cookies que utilizamos o por razones operativas, legales o reglamentarias. Te recomendamos que revises esta política regularmente para estar informado sobre nuestro uso de cookies y tecnologías relacionadas.</p>
      </section>
      
      <section>
        <h2>6. Contacto</h2>
        <p>Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en contactarnos a través de:</p>
        <ul>
          <li><strong>Email:</strong> academiaastral@gmail.com</li>
        </ul>
      </section>
    </Container>
  );
};

export default CookiesPolicyPage;
