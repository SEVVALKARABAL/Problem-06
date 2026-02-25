// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin.
// Örneğin "Create" butonuna yeşil arka plan, "Update" butonuna turuncu arka plan, ve "Delete" butonuna kırmızı arka plan ekleyin.
// public klasöründe bulunan preview.png görselini inceleyin. Tasarımın beklenen halini göreceksiniz.
// Tailwind CSS kullanarak butonların hover durumunda farklı efektler eklemek için hangi class'ları kullanabilirsiniz?
export default function ButtonVariants() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button className="text-white bg-emerald-500 rounded-md w-20 h-20">
            Create
          </button>
          <button className="text-white bg-amber-600 rounded-md w-20 h-20">
            Update
          </button>
          <button className="text-white bg-red-600 rounded-md w-20 h-20">
            Delete
          </button>
        </div>

        <button className="text-white bg-blue-400 rounded-md w-80 h-9">
          Testing Tailwind
        </button>
      </div>
    </div>
  );
}
