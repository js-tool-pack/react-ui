export function getClasses(name: string, show: boolean) {
  const el = show ? 'enter' : 'leave';
  const nameEl = `${name}-${el}`;

  return {
    active: `${nameEl}-active`,
    from: `${nameEl}-from`,
    to: `${nameEl}-to`,
  };
}
