import { addDoc, collection, documentId, query, where, writeBatch, getDocs } from 'firebase/firestore';
import { IProductWithQuantity } from '../../interfaces/IProducts';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import db from '../../firebase/config';
import { cleanOrderSummary } from '../../utilities/Utilities';

function CheckoutForm({productList, clean, total, setOrder}:{productList:IProductWithQuantity[] | undefined, clean: (()=> void) | undefined, total:string, setOrder: (id:string)=> void}) {
  const orderSummary = cleanOrderSummary(productList);

  const formik = useFormik({
    initialValues: {
      Name: '',
      Addres: '',
      Email: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .min(5, 'Must be 5 characters minimum')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      Addres: Yup.string()
        .min(5, 'Must be 5 characters minimum')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      Email: Yup.string().email('Invalid email address').required('Required'),
    }),



    onSubmit: async (values, { resetForm }) => {
      const batch = writeBatch(db);
      const productsRef = collection(db, 'products');
      const ordersRef = collection(db, 'orders');
      const outOfStock = [];

      const order = {
        client: values,
        items: orderSummary,
        total: total,
        date: new Date()
      }

      const qry = query(productsRef, where(documentId(), 'in', orderSummary.map((item) => item.id)))
      const products = await getDocs(qry);

      products.docs.forEach((doc) => {
        const item = orderSummary.find((prod) => prod.id === doc.id);
        const stock = doc.data().stock;

        if(item && stock >= item?.quantity) {
          batch.update(doc.ref, {
            stock: stock - item.quantity
          })
        } else {
          outOfStock.push(item);
        }
      })

      if(outOfStock.length === 0){
        batch.commit()
          .then(() => {
            addDoc(ordersRef, order)
            .then((doc) => {
              setOrder(doc.id)
              resetForm();
              clean && clean();
            })
          })
      } else {
        console.log('hay items sin stock');
      }
    }
  });

  return (
    <section aria-labelledby="contact-info-heading" className="w-full lg:w-1/2 bg-white p-6 shadow-sm lg:order-1">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Contact information</h3>
            <div className="mb-4">
              <label htmlFor="email-address" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input type="email" id="email" autoComplete="email" {...formik.getFieldProps('Email')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-200" placeholder="Enter your email address" />
              {formik.touched.Email && formik.errors.Email ? (
                <div className='text-red-600'>{formik.errors.Email}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Shipping address</h3>
          <div className="mb-4">
            <label htmlFor="full-name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input type="text" id="full-name" autoComplete="name" {...formik.getFieldProps('Name')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-200" placeholder="Enter your full name" />
            {formik.touched.Name && formik.errors.Name ? (
              <div className='text-red-600'>{formik.errors.Name}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <input type="text" id="address" autoComplete="street-address" {...formik.getFieldProps('Addres')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-200" placeholder="Enter your address" />
            {formik.touched.Addres && formik.errors.Addres ? (
              <div className='text-red-600'>{formik.errors.Addres}</div>
            ) : null}
          </div>
        </div>
        <div className="mb-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" disabled={orderSummary.length <= 0}>Confirm order</button>
        </div>
      </form>
    </section>
  )
}

export default CheckoutForm