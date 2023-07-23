import { icons } from '../theme/icons';

export const getIcon = (iconName: string) => {
  const IconComponent = icons[iconName];

  if (IconComponent) {
    return <IconComponent iconClass={iconName} />;
  }

  return null;
};
