export const categories = [
  {
    id: 1,
    name: 'Multi-Page',
  },
  {
    id: 2,
    name: 'LMS',
  },
  {
    id: 3,
    name: 'E-Commerce',
  },
  {
    id: 4,
    name: 'Side-Projects',
  },
];

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

export const allTestimonials = `*[_type == 'testimonial'] {
  _id,
  author,
  authorImage {
    asset -> {
      url
    }
  },
  authorProject,
  text
}`;

export const projectDetail = (slug) => `*[slug.current == "${slug}"] {
  _id,
  title,
  slug,
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
