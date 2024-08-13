type Space = string[] & {
  small: string;
  medium: string;
  large: string;
};

const space: Space = ["0px", "8px", "16px", "32px", "64px"] as Space;

space.small = space[1];
space.medium = space[2];
space.large = space[3];

export default space;
