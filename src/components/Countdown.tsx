import { useEffect, useState } from 'preact/hooks';

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

const calculate = (target: string): TimeLeft => {
  const distance = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
};

export default function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<TimeLeft>(() => calculate(target));

  useEffect(() => {
    const timer = window.setInterval(() => setTime(calculate(target)), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <div class="countdown" aria-label={`${time.days} days until ICLTP 2027`}>
      {Object.entries(time).map(([label, value]) => (
        <div class="countdown-unit" key={label}>
          <strong>{String(value).padStart(label === 'days' ? 3 : 2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
