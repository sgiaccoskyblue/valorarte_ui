import { FC } from 'react';
import RoundedButton from 'components/RoundedButton';

const Footer: FC = () => {
  return (
    <footer className='footer bg-black relative pt-1'>
      <div className='container mx-auto px-6'>
        <div className='sm:flex sm:mt-8'>
          <div className='mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between'>
            <div className='sm:flex sm:mt-8 md:max-w-md sm:max-w-lg mb-6'>
              <div className='container mx-auto px-6'>
                <p className='text-xl text-white font-bold mb-2'>Valorarte</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='container mx-auto px-6'>
                <div className='sm:flex sm:mt-8 md:max-w-md sm:max-w-lg'>
                  <p className='text-sm text-white font-bold mb-6'>
                    Maecenas vel vestibulum nibh. Fusce sagittis, enim vel molestie rutrum,
                    urnaMaecenas vel vestibulum nibh. Fusce sagittis, enim vel molestie rutrum,
                    urnaMaecenas vel vestibulum nibh. Fusce sagittis, enim vel molestie rutrum,
                    urna.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='container mx-auto px-6'>
                <div className='sm:flex sm:mt-8 md:max-w-md sm:max-w-lg'>
                  <div className='flex flex-col'>
                    <p className='text-white mb-6 text-md font-bold'> Lorem ipsum </p>
                    <RoundedButton>Ingresar</RoundedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-6'>
        <div className='mt-16 border-t-2 border-gray-300 flex flex-col items-center'>
          <div className='sm:w-2/3 text-center py-6'>
            <p className='text-sm text-white mb-2'>
              © 2021 Valorarte SUA - Desarrollado por White Ball Media
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
