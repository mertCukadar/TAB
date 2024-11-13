'use client';
import { useState } from "react";
import Link from "next/link";
import { FaLinkedin , FaFacebook , FaTwitter , FaInstagram } from "react-icons/fa";

export function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <footer>
            {/* Desktop menu */}
            <div className="md:block shadow-md">
                <div className="md:flex justify-center shadow-lg bg-footerBackGround shadow-black ">
                    <div className="m-auto w-full h-full flex md:justify-center md:ml-0  items-center text-left space-x-7 p-12">
                        <p className="text-4xl text-white font-semibold">Logo</p>
                        <div className="border-r-2 border-white h-32 w-1"></div>

                        <ol className="text-white font-bold text-2xl space-y-5">
                        <li>
                                <Link href="/hizmetler" className="hover:text-gray-300">
                                    <p>Ana Sayfa</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/hizmetler" className="hover:text-gray-300">
                                    <p>Hizmetlerimiz</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-gray-300">
                                    <p>Blog</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/iletisim" className="hover:text-gray-300">
                                    <p>İletişim</p>
                                </Link>
                            </li>
                        </ol>
                    </div>
                    <div className="bg-gray-700 m-auto w-full h-full flex flex-col justify-center items-start text-left p-12">
                        <p className="text-xl font-bold text-gray-200 mb-2">
                            Özel AI içeriği için bültenimize abone olun:
                        </p>
                        <label className="font-bold text-white mb-1" htmlFor="email">
                            E-posta Adresi <span className="text-red-700">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full md:w-2/3 p-2 border border-gray-300 rounded mb-2"
                            placeholder="E-posta adresinizi girin"
                        />
                        <p className="text-sm font-bold text-gray-200 md:w-2/3 mt-2">
                            Marketing AI Institute'un, ürünlerimiz ve hizmetlerimiz hakkında sizinle iletişim kurabilmesi için bize sağladığınız iletişim bilgilerine ihtiyacı var. Dilediğiniz zaman bu iletişimlere olan aboneliğinizi iptal edebilirsiniz. Abonelikten nasıl çıkılacağının yanı sıra gizlilik uygulamalarımız ve gizliliğinizi koruma taahhüdümüz hakkında bilgi için lütfen Gizlilik Politikamızı inceleyin.
                        </p>
                        <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition">
                            Gönder
                        </button>
                    </div>

                    
                </div>
                <div className="bg-orange-500 md:items-center p-3 text-white md:flex md:justify-between justify-center space-y-3 md:space-y-0 grid mx-auto py-6">
                    <div className="grid grid-cols-4 md:gap-8 gap-1">
                        <FaInstagram className="md:text-4xl text-xl mx-auto"/>
                        <FaFacebook className="md:text-4xl text-xl mx-auto"/>
                        <FaLinkedin className="md:text-4xl text-xl mx-auto"/> 
                        <FaTwitter className="md:text-4xl text-xl mx-auto"/>    
                    </div>
                    <div className="flex justify-center items-center md:hidden w-full border-b-2">
                            
                    </div>
                    <div className="flex items-center justify-center">
                        <p>© 2024 Marketing AI Institute</p>
                    </div>
                </div>
            </div>

            
        </footer>
    );
}
