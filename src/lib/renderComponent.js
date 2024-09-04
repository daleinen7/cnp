import { PortableText } from 'astro-portabletext';
import Headline from '../components/Headline.astro';
import SideBySide from '../components/SideBySide.astro';
import Hero from '../components/Hero.astro';
import { component } from 'sanity/structure';
import { headline } from '../sanity/schemaTypes/headline';

const renderComponent = (component) => {
  switch (component._type) {
    case 'headline':
      return <Headline headline={component.headline} />;
    case 'sideBySide':
      return (
        <SideBySide
          headline={component.headline}
          text={component.text}
          image={component.image}
        />
      );
    case 'hero':
      return (
        <Hero
          heroText={component.heroText}
          heroImage={component.heroImage}
        />
      );
    case 'basicContent':
      return <PortableText value={component.content} />;
    default:
      return null;
  }
};

export default renderComponent;
