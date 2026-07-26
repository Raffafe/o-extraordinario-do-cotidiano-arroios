import Image from "next/image";
import Link from "next/link";
import type { Month } from "./data";

const schools = [
  {
    name: "Escola Básica O Leão de Arroios",
    symbol: "/escola-leao-arroios.png",
  },
  { name: "Escola Básica N.º1 / JI" },
  { name: "Escola Básica Sampaio Garrido" },
];

export default function ExhibitionPage({ data }: { data: Month }) {
  return (
    <main>
      <header className="topbar">
        <Link className="brand" href="/">Atelier da Escuta</Link>
        <span>Arquivo Criativo das Crianças de Arroios</span>
      </header>

      <section className="exhibitionHero section">
        <div>
          <Link className="backLink" href="/#percurso">← Voltar ao percurso</Link>
          <p className="eyebrow">{data.month} · Exposição virtual</p>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <p className="temporaryNote">
            Esta página apresenta a estrutura da exposição. As produções serão
            publicadas após a realização das oficinas e a revisão dos registos.
          </p>
        </div>
        <div className="exhibitionHeroImage">
          <Image src={data.image} alt={`Oficina ${data.title}`} fill priority sizes="(max-width: 760px) 100vw, 48vw" />
        </div>
      </section>

      <section className="schoolIndex section">
        <p className="eyebrow">Três escolas · três olhares</p>
        <h2>Escolha uma exposição</h2>
        <div className="schoolCards">
          {schools.map((school, index) => (
            <a className="schoolCard" href={`#escola-${index + 1}`} key={school.name}>
              <div className="schoolCardTop">
                <span>0{index + 1}</span>
                {school.symbol && (
                  <span className="schoolSymbol">
                    <Image
                      src={school.symbol}
                      alt="Símbolo da Escola Básica O Leão de Arroios"
                      fill
                      sizes="84px"
                    />
                  </span>
                )}
              </div>
              <h3>{school.name}</h3>
              <p>Espaço preparado para receber as produções desta comunidade escolar.</p>
              <strong>Conhecer a exposição ↓</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="schoolExhibitions">
        {schools.map((school, index) => (
          <article className="schoolGallery section" id={`escola-${index + 1}`} key={school.name}>
            <div className="schoolGalleryHeading">
              <p className="eyebrow">{data.month} · Escola 0{index + 1}</p>
              <h2>{school.name}</h2>
              <p>
                Aqui nascerá a galeria desta escola: imagens das produções,
                fragmentos do processo e palavras das crianças, sempre sem
                rostos ou dados que permitam a sua identificação.
              </p>
            </div>
            <div className="galleryPlaceholder" aria-label={`Galeria de ${school.name} em preparação`}>
              <span>Exposição em preparação</span>
              <p>As obras ocuparão este espaço ao longo do projeto.</p>
            </div>
          </article>
        ))}
      </section>

      <footer>
        <div>
          <strong>O Extraordinário do Cotidiano</strong>
          <span>Ateliers de Bolso nas Escolas de Arroios</span>
        </div>
        <Link className="footerMark" href="/">Atelier da Escuta</Link>
      </footer>
    </main>
  );
}
