import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
const TopNavigationBar = () => {
  // Inisialisasi state isOpen dengan nilai awal false
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi toggle untuk mengubah nilai isOpen dari true menjadi false atau sebaliknya
  const toggle = () => setIsOpen(!isOpen);

  // Return JSX untuk menampilkan elemen navigasi
  return (
    // Tag <nav> dengan kelas CSS untuk memberikan background dan shadow
    <nav className="bg-black opacity-80 fixed top-0 left-0 right-0 z-[9999]">
      {/* Container utama untuk elemen navigasi */}
      <div className="container mx-auto px-4 py-2 w-full">
        {/* Flex container untuk menata elemen-elemen di dalam navigasi */}
        <div className="flex items-center justify-between">
          {/* Grup elemen untuk logo atau nama */}
          <div className="flex items-center">
            {/* Link ke halaman utama dengan teks Phincon Academy */}
            <a
              href="/"
              className="text-white px-4 py-2 hover:text-gray-300 text-2xl font-bold"
            >
              Traditional Games
            </a>
          </div>
          {/* Grup link untuk menu yang hanya terlihat di layar medium ke atas */}
          <div className="hidden md:flex md:items-center">
            {/* Link ke halaman Home */}
            <a href="/" className="text-white px-4 py-2 hover:text-gray-300">
              Home
            </a>
            {/* Link ke halaman About */}
            <a href="/" className="text-white px-4 py-2 hover:text-gray-300">
              About
            </a>
            {/* Link ke halaman Contact */}
            <a href="/" className="text-white px-4 py-2 hover:text-gray-300">
              Contact
            </a>
            {/* Link ke halaman Sign Up */}
            <a href="/" className="text-white px-4 py-2 hover:text-gray-300">
              Sign Up
            </a>
            {/* Link ke halaman Login */}
            <a href="/" className="text-white px-4 py-2 hover:text-gray-300">
              Login
            </a>
          </div>
          {/* Tombol untuk membuka atau menutup menu di layar kecil */}
          <button
            className="text-white focus:outline-none md:hidden"
            onClick={toggle}
          >
            {/* Ikon menu menggunakan komponen CiMenuFries */}
            <CiMenuFries className="h-6 w-6" />
          </button>
        </div>
        {/* Menu dropdown yang hanya terlihat di layar kecil */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          {/* Link ke halaman Home dalam menu dropdown */}
          <a
            href="/"
            className="block text-white px-4 py-2 hover:text-gray-300"
          >
            Home
          </a>
          {/* Link ke halaman About dalam menu dropdown */}
          <a
            href="/"
            className="block text-white px-4 py-2 hover:text-gray-300"
          >
            About
          </a>
          {/* Link ke halaman Contact dalam menu dropdown */}
          <a
            href="/"
            className="block text-white px-4 py-2 hover:text-gray-300"
          >
            Contact
          </a>
          {/* Link ke halaman Sign Up dalam menu dropdown */}
          <a
            href="/"
            className="block text-white px-4 py-2 hover:text-gray-300"
          >
            Sign Up
          </a>
          {/* Link ke halaman Login dalam menu dropdown */}
          <a
            href="/"
            className="block text-white px-4 py-2 hover:text-gray-300"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
