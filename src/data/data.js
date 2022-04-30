
let books = [
   {
      number: 1,
      name: 'Shahnameh',
      imageURL: 'https://dkstatics-public.digikala.com/digikala-products/3489284.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
      author: 'Hakim Ferdossi',
      gender: 'Legendary Epic',
      description: 'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id en',
   },
   {
      number: 2,
      name: 'Masnavi',
      imageURL: 'https://pictures.abebooks.com/isbn/9781463510169-us.jpg',
      author: 'Roomi',
      gender: 'poet',
      description: 'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id en',
   },
   
];


export function getBooks() {
   return books;
}

export function getBook(number) {
   return books.find(
      (book) => book.number === number
   );
}