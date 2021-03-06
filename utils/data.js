// Main Navigation
export const menu = [
  {
    id: 1,
    page: 'Home',
    path: '/',
  },
  {
    id: 2,
    page: 'About',
    path: '/about',
  },
  {
    id: 3,
    page: 'Projects',
    path: '/projects',
  },
  {
    id: 4,
    page: 'Contact',
    path: '/contact',
  },
];

// Projects Categories
export const projectCategories = [
  {
    id: 1,
    name: 'One-Page',
  },
  {
    id: 2,
    name: 'Multi-Page',
  },
  {
    id: 3,
    name: 'LMS',
  },
  {
    id: 4,
    name: 'E-Commerce',
  },
];

// Next/Image Placeholder
export const placeholder =
  'data:image/webp;base64,UklGRlACAABXRUJQVlA4WAoAAAAgAAAAPQMAbgIASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEwRAAAALz2DmwAHUKMa1aj/gYjofwAA';

// Queries "Projects"
export const allProjects = `*[_type == 'project'] {
  _id,
  title,
  slug,
  projectType,
  image {
    asset -> {
      url
    }
  }
}`;

export const filteredProjects = (category) => {
  const query = `*[_type == "project" && projectType == "${category}"] {
    _id,
    title,
    slug,
    projectType,
    image {
      asset -> {
        url
      }
    }
  }`;
  return query;
};

export const featuredProjects = `*[_type == 'project' && featured == 'yes'] {
  _id,
  title,
  slug,
  projectType,
  image {
    asset -> {
      url
    }
  }
}`;

export const projectDetail = (slug) => {
  const query = `*[slug.current == "${slug}"] {
    _id,
    title,
    slug,
    description,
    projectType,
    tech,
    maintenance,
    collab,
    projectUrl,
    image {
      asset -> {
        url
      }
    }
  }`;
  return query;
};

// Query "Testimonials"
export const allTestimonials = `*[_type == 'testimonial'] {
  _id,
  author,
  authorImage {
    asset -> {
      url
    }
  },
  authorProject,
  authorTitle,
  text
}`;
