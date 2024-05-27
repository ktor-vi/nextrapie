import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomCustomField extends Schema.Component {
  collectionName: 'components_custom_custom_fields';
  info: {
    name: 'Custom_field';
    displayName: 'Custom field';
    icon: 'archway';
  };
  attributes: {
    title: Attribute.String;
    required: Attribute.Boolean;
    options: Attribute.String;
  };
}

export interface CustomHeroSection extends Schema.Component {
  collectionName: 'components_custom_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'alien';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    arrowlink: Attribute.Component<'custom.link'>;
  };
}

export interface CustomLink extends Schema.Component {
  collectionName: 'components_custom_links';
  info: {
    displayName: 'Link';
    icon: 'arrowRight';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'custom.custom-field': CustomCustomField;
      'custom.hero-section': CustomHeroSection;
      'custom.link': CustomLink;
    }
  }
}
