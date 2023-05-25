import {
  chartIconpeng,
  gamepadIconpeng,
  peopleIconpeng,
  profile1,
  profile2,
  profile3,
} from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];
export const landingPerf = [
  {
    id: 'perf-1',
    title: 'USER ACTIVE',
    value: '2700+',
  },
  {
    id: 'perf-2',
    title: 'INCREASE PRODUCTIVITY',
    value: '30%',
  },
  {
    id: 'perf-3',
    title: 'Community',
    value: 'GROWING',
  },
];
export const featureList = [
  {
    id: 'feature-1',
    icon: chartIconpeng,
    title: 'Progress Tracking',
    content:
      'Stay on top of your tasks representation of users progress, indicating completed, remaining tasks, and time spent on each task.',
  },
  {
    id: 'feature-2',
    icon: gamepadIconpeng,
    title: 'Gamification',
    content:
      'Minimize your task to make the experience motivating. This can involve achievements, badges, or rewards for completing tasks or reaching productivity milestones.',
  },
  {
    id: 'feature-3',
    icon: peopleIconpeng,
    title: 'Collaboration Team',
    content:
      ' include collaboration features for team, such as shared task lists, progress tracking, and communication board. This enables teams efficiently and stay aligned on their goals.',
  },
];
export const clientReview = [
  {
    id: 'client-1',
    name: 'Jamie Clear',
    content:
      'Completely transformed the way I work. The Pomodoro technique combined with task tracking and progress visualization has helped me stay focused and accomplish more in less time. Highly recommended!',
    title: 'Author',
    img: profile1,
  },
  {
    id: 'client-2',
    name: 'Pikachu Murakamouse',
    content:
      'Tried several task management tools, but Pomodojo+ stands out from the rest. Its intuitive interface, collaboration features, and gamification elements make task management enjoyable and motivating. I love the sense of accomplishment I get when completing tasks and earning badges!',
    title: 'Game Designer',
    img: profile2,
  },
  {
    id: 'client-3',
    name: 'David Alleoha',
    content:
      'My productivity has skyrocketed. The ability to break tasks into focused work sessions and short breaks keeps me energized and prevents burnout. The progress tracking feature helps me analyze my productivity patterns and make improvements. Its a must-have tool for anyone looking to enhance their productivity.',
    title: 'Chief Technology Officer',
    img: profile3,
  },
];
