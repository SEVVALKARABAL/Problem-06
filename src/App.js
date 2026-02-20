// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin.
// Örneğin "Create" butonuna yeşil arka plan, "Update" butonuna turuncu arka plan, ve "Delete" butonuna kırmızı arka plan ekleyin.
// public klasöründe bulunan preview.png görselini inceleyin. Tasarımın beklenen halini göreceksiniz.
// Tailwind CSS kullanarak butonların hover durumunda farklı efektler eklemek için hangi class'ları kullanabilirsiniz?
export default function ButtonVariants() {
  return (
    <span className='wrapper'>
      <button className='button-create'>Create</button>
      <button className='button-update'>Update</button>
      <button className='button-delete'>Delete</button>
    </span>
  )
}
