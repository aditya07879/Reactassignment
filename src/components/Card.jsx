function Card({ title, price, category, image="https://imgs.search.brave.com/0KCuPZ8uki3WTVNnh5xFHpCt9hQBagqRsZDGoQIaipA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9taW5pbWFsaXN0/LXBvcnRyYWl0LW9m/LWEtd29tYW4td2l0/aC1nbG93aW5nLWxp/Z2h0LWJlaGluZC1o/ZXItZnJlZS1pbWFn/ZS5qcGVnP3c9NjAw/JnF1YWxpdHk9ODA" }) {
  return (
    <div className="max-w-sm bg-black text-white rounded-lg shadow-md overflow-hidden border border-zinc-800">
      
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="text-sky-300 text-sm mt-2">
          {category}
        </p>
        <h2 className="text-lg font-semibold">{title}</h2>

        <p className="text-orange-400 text-sm mt-2">
          ${price}
        </p>

         <button className="relative rounded font-bold bg-[#6c757d] px-10 py-2 shadow-[0_5px_#495057] duration-300 ease-in-out hover:top-px hover:shadow-[0_3px_#495057] active:shadow-[#495057]">
      buy
    </button>
      </div>
    </div>
  );
}

export default Card;