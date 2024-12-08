import TailwindButton from './components/TailwindCSS/TailwindButton';

export default function AppTailwindCSS() {
  return (
    <>
      <h1 className="text-sky-300 text-3xl font-bold underline">
        Hello World!
      </h1>
      <TailwindButton>Button</TailwindButton>
    </>
  );
}
