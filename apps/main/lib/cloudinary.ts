const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_FOLDER = 'dksj2niho';

export const buildCloudinaryImageUrl = (
  publicId: string,
  transformations = 'f_auto,q_auto'
): string => {
  if (!CLOUDINARY_CLOUD_NAME) {
    return '';
  }

  const normalizedPublicId = publicId.startsWith(`${CLOUDINARY_FOLDER}/`)
    ? publicId
    : `${CLOUDINARY_FOLDER}/${publicId}`;
  const transformationSegment = transformations ? `${transformations}/` : '';

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformationSegment}${normalizedPublicId}`;
};
