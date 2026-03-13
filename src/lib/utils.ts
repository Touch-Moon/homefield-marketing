import type { Project } from '@/types';

/** placehold.co fallback URL */
export function placeholderImage(
  width: number,
  height: number,
  text = 'IMG',
  bg = '101820',
  color = 'FFFFFF'
): string {
  return `https://placehold.co/${width}x${height}/${bg}/${color}?text=${encodeURIComponent(text)}`;
}

/** Thumbnail image with fallback */
export function getProjectImage(project: Project, type: 'thumbnail' | 'hero' = 'thumbnail'): string {
  const src = type === 'hero' ? project.hero_image : project.thumbnail_image;
  return src || placeholderImage(800, 600, project.name);
}
