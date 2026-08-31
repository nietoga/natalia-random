import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: CartaParaNatalia })

function CartaParaNatalia() {
  return (
    <main>
      <header id="inicio" className="portada">
        <nav><span className="firma-corta">A.</span><span className="estado"><i /> sábado completado</span></nav>
        <div className="hero">
          <div className="hero-copia">
            <h1>Hola, Natalia.</h1>
            <p>En esto invertí mi sábado: un servidor propio y varios servicios.</p>
          </div>
          <figure className="sabado-visual">
            <img src="/sabado.jpeg" alt="Otra loca noche de sábado" loading="eager" decoding="async" />
            <figcaption>Mi sábado, versión técnica.</figcaption>
          </figure>
          <Seguir href="#evidencias" />
        </div>
      </header>

      <section id="evidencias" className="evidencias" aria-label="Capturas del servidor">
        <div className="evidencia-intro">
          <h2>Primero monté Proxmox. Después, Coolify.</h2>
          <p>Proxmox aloja las máquinas virtuales; Coolify despliega y mantiene los servicios. Luego dejé funcionando DDNS, enlaces cortos, citas y un chatbot.</p>
        </div>
        <Captura movil="/proxmox-working-slim.webp" completa="/proxmox-working-full.webp" titulo="Proxmox funcionando" clase="captura-uno" />
        <Captura movil="/coolify-working-slim.webp" completa="/coolify-working-full.webp" titulo="Servicios desplegados en Coolify" clase="captura-dos" />
        <Seguir href="#prueba-dominio" />
      </section>

      <section id="prueba-dominio" className="prueba-dominio" data-revelar aria-labelledby="titulo-prueba">
        <div className="dominio-actual">
          <span className="flecha-dominio" aria-hidden="true">↗</span>
          <p>Mira arriba</p>
          <strong>natalia.apps.nietoga.com</strong>
        </div>
        <div className="prueba-copia">
          <h2 id="titulo-prueba">Estos enlaces también los hice yo.</h2>
          <div className="ruta-enlace"><span>Te envié</span><strong>slash.apps.nietoga.com/natalia</strong></div>
          <div className="ruta-enlace"><span>Estás en</span><strong>natalia.apps.nietoga.com</strong></div>
        </div>
        <Seguir href="#postdata" />
      </section>

      <PostdataPez />

      <section id="contacto" className="contacto" aria-labelledby="titulo-contacto">
        <div className="contacto-contenido">
          <h2 id="titulo-contacto"><span className="cierre-sabado">Eso fue mi sábado.</span> ¿Alguna duda?</h2>
          <a href="https://wa.me/573127509912" target="_blank" rel="noreferrer"><strong>Escríbeme por WhatsApp</strong> <span>312 750 9912</span></a>
        </div>
        <footer><span className="firma-footer">Hecho para Natalia · por Agustín</span><a href="#inicio">Volver arriba ↑</a></footer>
      </section>
    </main>
  )
}

function PostdataPez() {
  const [lista, setLista] = useState(false)
  const [error, setError] = useState(false)
  return (
    <aside id="postdata" className="postdata" aria-labelledby="titulo-postdata">
      <div className="burbujas" aria-hidden="true"><span /><span /><span /></div>
      <div className="postdata-copia">
        <h2 id="titulo-postdata">Ah, además…</h2>
        <p>Kevin me trajo un pez limpiador. Te presento a Mantequilla.</p>
      </div>
      <figure className={`foto-pez ${lista ? 'con-imagen' : ''}`}>
        <img src="/pez-kevin.webp" alt="El pez limpiador nuevo que trajo Kevin" loading="lazy" decoding="async" onLoad={() => setLista(true)} onError={() => setError(true)} />
        <figcaption>{lista ? 'El nuevo integrante' : error ? 'No se pudo cargar la foto' : 'Preparando la foto…'}</figcaption>
      </figure>
      <Seguir href="#contacto" />
    </aside>
  )
}

function Seguir({ href }: { href: string }) {
  return <a className="seguir" href={href}><span>Seguir</span><i aria-hidden="true">↓</i></a>
}

function Captura({ movil, completa, titulo, clase }: { movil: string; completa: string; titulo: string; clase: string }) {
  const [lista, setLista] = useState(false)
  const [error, setError] = useState(false)
  return (
    <figure className={`captura ${clase} ${lista ? 'con-imagen' : ''}`} data-revelar>
      <a className="captura-enlace" href={completa} target="_blank" rel="noreferrer" aria-label={`Ampliar captura: ${titulo}`}>
        <picture>
          <img src={movil} alt="" loading="eager" decoding="async" onLoad={() => setLista(true)} onError={() => setError(true)} />
        </picture>
      </a>
      <figcaption><strong>{titulo}</strong><span>{error ? 'No se pudo cargar' : 'toca para ampliar ↗'}</span></figcaption>
    </figure>
  )
}
