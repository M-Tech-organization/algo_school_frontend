import footer_logo from "../../assets/footer_logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
		<div className='bg-gradient-to-b from-[#084FC7] to-[#7F56D9] rounded-t-lg'>
			{/* Main container */}
			<div className='max-w-[1000px] mx-auto px-4 py-10 flex flex-col md:flex-row items-start md:items-center justify-between text-white gap-10 md:gap-[100px]'>
				{/* Logo & Text */}
				<div className='max-w-[250px] w-full md:w-auto mb-6 md:mb-0'>
					<img
						loading='lazy'
						src={footer_logo}
						alt='Logo'
						className='mb-4 md:mb-6 max-w-[150px] w-full h-auto'
					/>
					<p className='text-[14px] sm:text-[16px] leading-relaxed'>
						Har kim kod yozishni o‘rganishi mumkin. Faqat ozchilik uni mukammal
						qiladi. Algo School shu ozchilikni tayyorlaydi.
					</p>
				</div>

				<div className='flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 md:gap-[38px] w-full'>
					{/* Links */}
					<div className='flex-1 min-w-[150px]'>
						<h3 className='text-[18px] sm:text-[22px] font-semibold mb-4'>
							Sahifalar
						</h3>
						<ul className='flex flex-col gap-2 text-[14px] sm:text-[16px]'>
							{[
								'Natijalar',
								'Algo School haqida',
								'Expertlarimiz haqida',
								'Tez-Tez beriladigan savollar',
							].map((link, idx) => (
								<li key={idx}>
									<a
										href='#'
										className='text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#8FD9FA] hover:to-[#1FB3F5] hover:bg-clip-text hover:text-transparent'
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className='flex-1 w-full md:min-w-[320px]'>
						<h3 className='text-[18px] sm:text-[22px] font-semibold mb-4'>
							Ishonch va aloqa
						</h3>
						<ul className='flex flex-col gap-3 text-[14px] sm:text-[16px]'>
							<li className='flex items-center gap-2 sm:gap-3'>
								<Phone size={24} className='flex-shrink-0' />
								<a
									href='tel:+998908086383'
									className='text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#8FD9FA] hover:to-[#1FB3F5] hover:bg-clip-text hover:text-transparent break-words'
								>
									+998 90 808 63 83
								</a>
							</li>
							<li className='flex items-center gap-2 sm:gap-3'>
								<Mail size={24} className='flex-shrink-0' />
								<a
									href='@AlgoSchoolHelp'
									className='text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#8FD9FA] hover:to-[#1FB3F5] hover:bg-clip-text hover:text-transparent break-words'
								>
									@AlgoSchoolHelp
								</a>
							</li>
							<li className='flex items-center gap-2 sm:gap-3'>
								<MapPin size={24} className='flex-shrink-0' />
								<a
									href='#'
									className='text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#8FD9FA] hover:to-[#1FB3F5] hover:bg-clip-text hover:text-transparent break-words'
								>
									Yunusobod tumani Bodomzor masjidi, Roboticslab O’quv binosida
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom */}
			<div className='max-w-[1000px] mt-6 px-4 mx-auto border-t-[1px] border-white text-center py-4 text-sm opacity-90'>
				<h3 className='text-white text-[14px] sm:text-[16px] font-[500]'>
					© 2025 M Company x Robocontest
				</h3>
			</div>
		</div>
	)
};

export default Footer;
