import React from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPolicyPage = () => {
  return (
    <Container className="mt-5">
      <h1>Política de Privacidad</h1>

      <section>
        <h2>1. Introducción</h2>
        <p>
          En Academia Astral, valoramos tu privacidad y nos comprometemos a proteger la información personal que compartes con nosotros. Esta política de privacidad describe cómo recopilamos, usamos y protegemos tu información personal.
        </p>
      </section>

      <section>
        <h2>2. Información que Recopilamos</h2>
        <p>En caso de ser necesario podriamos recopilamos diferentes tipos de información para ofrecerte y mejorar nuestros servicios, incluyendo:</p>
        <ul>
          <li><strong>Información personal:</strong> Nombre, dirección de correo electrónico, información de pago, etc.</li>
          <li><strong>Información de uso:</strong> Datos sobre cómo accedes y utilizas nuestra plataforma.</li>
          <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo, etc.</li>
        </ul>
      </section>

      <section>
        <h2>3. Cómo Usamos tu Información</h2>
        <p>Utilizamos la información que recopilamos para varios fines, incluyendo:</p>
        <ul>
          <li>Proveer y mantener nuestros servicios.</li>
          <li>Procesar transacciones y enviar confirmaciones.</li>
          <li>Comunicarnos contigo, incluyendo el envío de actualizaciones, ofertas y promociones.</li>
          <li>Mejorar nuestros servicios y personalizar tu experiencia.</li>
        </ul>
      </section>

      <section>
        <h2>4. NO compartimos tu Información</h2>
        <p>No vendemos, intercambiamos ni transferimos de ninguna otra manera tu información personal a terceros sin tu consentimiento, excepto en los siguientes casos:</p>
        <ul>
          <li>Con proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web y negocios.</li>
          <li>Para cumplir con la ley o responder a solicitudes legales.</li>
        </ul>
      </section>

      <section>
        <h2>5. Seguridad de tu Información</h2>
        <p>
          Implementamos una variedad de medidas de seguridad para mantener la seguridad de tu información personal. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet.
        </p>
      </section>

      <section>
        <h2>6. Tus Derechos</h2>
        <p>Tienes derecho a:</p>
        <ul>
          <li>Acceder a tu información personal.</li>
          <li>Solicitar la corrección de cualquier información inexacta.</li>
          <li>Solicitar la eliminación de tu información personal.</li>
          <li>Retirar tu consentimiento para el procesamiento de tu información.</li>
        </ul>
      </section>

      <section>
        <h2>7. Cookies</h2>
        <p>
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies son pequeños archivos que un sitio o su proveedor de servicios transfiere al disco duro de tu computadora a través de tu navegador web (si lo permites).
        </p>
      </section>

      <section>
        <h2>8. Cambios en Nuestra Política de Privacidad</h2>
        <p>
          Podemos actualizar nuestra política de privacidad de vez en cuando. Te notificaremos sobre cualquier cambio publicando la nueva política de privacidad en esta página.
        </p>
      </section>

      <section>
        <h2>9. Contacto</h2>
        <p>Si tienes alguna pregunta sobre esta política de privacidad, puedes contactarnos a través de:</p>
        <ul>
          <li><strong>Correo electrónico:</strong> academiaastral@gmail.com</li>
          
        </ul>
       
      </section>
    </Container>
  );
};

export default PrivacyPolicyPage;
