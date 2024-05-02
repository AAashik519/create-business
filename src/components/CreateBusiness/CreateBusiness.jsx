import axios from "axios";
import { useForm } from "react-hook-form";

const CreateBusiness = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    // const image = data.image[0]; // Get the uploaded image
    const formData = new FormData();
    formData.append("image", data.image[0]);
 
    console.log(formData);
  
    const businessData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      country: data.country,
      business_type:[ data.business],
      city: data.city,
      street: data.street,
      post_code: data.post_code,
      //  logo: formData, // Pass formData directly
    };
  
    console.log("business", businessData);
    const storedToken = localStorage.getItem("accessToken");
    console.log(storedToken);
  
    try {
      const res = await axios.post("https://sandbox.trektil.com/api/v1/business/create/",businessData,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    console.log(data)

}



//   console.log(watch("example"))

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Your Business
              </h1>
              <form
               onSubmit={handleSubmit(onSubmit)}
            
                className="space-y-4 md:space-y-6"
                action="#"
                // onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex gap-2 ">
                  <div className="w-1/2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                    {...register("name")}
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your name"
                    />
                  </div>

                  <div className="w-1/2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                    {...register("email")}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your name"
                    />
                  </div>
                </div>
                <div className="flex gap-2 ">
                  <div className="w-1/2">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone
                    </label>
                    <input
                    {...register("phone")}
                      type="text"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your phone number"
                    />
                  </div>

                  <div className="w-1/2">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country
                    </label>
                    <input
                    {...register("country")}
                      type="text"
                      name="country"
                      id="country"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your country"
                    />
                  </div>
                </div>
                <div className="flex gap-2 ">
                  <div className="w-1/2">
                    <label
                      htmlFor="business"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select Business Type
                    </label>
                    <select
                    {...register("business")}
                      id="business"
                      name="business"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue="" // You can set default value if needed
                    >
                      <option value="" disabled>
                        Select Business Type
                      </option>
                      <option value="rs">rs</option>
                      <option value="pf">pr</option>
                      <option value="at">at</option>
                      <option value="ap">ap</option>
                      <option value="ev">ev</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <div className="w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City
                    </label>
                    <input
                        {...register("city")}
                      type="text"
                      name="city"
                      id="city"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your city"
                    />
                  </div>
                </div>
                <div className="flex gap-2 ">
                  <div className="w-1/2">
                    <label
                      htmlFor="street"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Street
                    </label>
                    <input
                        {...register("street")}
                      type="text"
                      name="street"
                      id="street"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your street"
                    />
                  </div>

                  <div className="w-1/2">
                    <label
                      htmlFor="post_code"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Post Code
                    </label>
                    <input
                        {...register("post_code")}
                      type="text"
                      name="post_code"
                      id="post_code"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your post code"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    image
                  </label>
                  <input
                      {...register("image")}
                    name="image"
                    id="image"
                    type="file"
                    accept="image/*"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateBusiness;
