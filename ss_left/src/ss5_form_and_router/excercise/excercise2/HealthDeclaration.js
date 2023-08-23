import { Form, ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup"
export function HealthDeclaration() {
    return (
        <><Formik
            initialValues={{
                name: '',
                indentity: '',
                birthofday: '',
                gender: '',
                nationality: '',
                company: '',
                department: '',
                healthinsurance: '',
                cityprovince: '',
                district: '',
                wards: '',
                more: '',
                phone: '',
                email: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("Not empty"),
                indentity: Yup.string().required("Not empty"),
                birthofday: Yup.number().required("Not empty").moreThan(1900),
                nationality: Yup.string().required("Not empty"),
                cityprovince: Yup.string().required("Not empty"),
                district: Yup.string().required("Not empty"),
                wards: Yup.string().required("Not empty"),
                more: Yup.string().required("Not empty"),
                phone: Yup.string().required("Not empty"),
                email: Yup.string().required("Not empty").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,"Invalid email address")
            })}

        >
            <Form>
                <strong>
                    <h1>Tờ khai y tế</h1>
                </strong>
                <div>
                    <label htmlFor="">Họ tên</label>
                    <br />
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component='span' />
                </div>
                <div>
                    <label htmlFor="">Số hộ chiếu / CMND</label>
                    <br />
                    <Field type="text" name="indentity" />
                    <ErrorMessage name="indentity" component='span' />
                </div>
                <div>
                    <label htmlFor="">Năm sinh</label>
                    <br />
                    <Field type="text" name="birthofday" />
                    <ErrorMessage name="birthofday" component='span' />
                </div>
                <div>
                    Giới tính <Field type="radio" name="gender" value='male' />
                    <label htmlFor="">Nam</label>
                    <Field type="radio" name="gender" value='female' />
                    <label htmlFor="">Nữ</label>
                
                </div>
                <div>
                    <label htmlFor="">Quốc tịch</label>
                    <br />
                    <Field type="text" name="nationality" />
                    <ErrorMessage name="nationality" component='span' />
                </div>
                <div>
                    <label htmlFor="">Công ty làm việc</label>
                    <br />
                    <Field type="text" name="company" />
                </div>
                <div>
                    <label htmlFor="">Bộ phận làm việc</label>
                    <br />
                    <Field type="text" name="department" />
                </div>
                <div>
                    <label htmlFor="">Có thẻ bảo hiểm y tế</label>
                    <Field type="checkbox" name="healthinsurance" />
                </div>
                <strong>Địa chỉ liên lạc tại việt nam</strong>
                <div>
                    <label htmlFor="">Tỉnh thành</label>
                    <br />
                    <Field type="text" name="cityprovince" />
                    <ErrorMessage name="cityprovince" component='span' />
                </div>
                <div>
                    <label htmlFor="">Quận/Huyện</label>
                    <br />
                    <Field type="text" name="district" />
                    <ErrorMessage name="district" component='span' />
                </div>
                <div>
                    <label htmlFor="">Phường/Xã</label>
                    <br />
                    <Field type="text" name="wards" />
                    <ErrorMessage name="wards" component='span' />
                </div>
                <div>
                    <label htmlFor="">Số nhà,phố,tổ dân phố/thôn/đội</label>
                    <br />
                    <Field type="text" name="more" />
                    <ErrorMessage name="more" component='span' />
                </div>
                <div>
                    <label htmlFor="">Điện thoại</label>
                    <br />
                    <Field type="text" name="phone" />
                    <ErrorMessage name="phone" component='span' />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <br />
                    <Field type="text" name="email" />
                    <ErrorMessage name="email" component='span' />
                </div>
                <button type="submit">Gửi</button>
            </Form>
        </Formik>
        </>
    );
}