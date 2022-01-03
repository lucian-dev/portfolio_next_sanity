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
