import { Field, FieldProps, Form, Formik, FormikHelpers, FormikProps } from 'formik'
import Head from 'next/head'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import IApplicationState from '../../commons/interfaces/IApplicationState';
import InputBar from '../../components/InputBar';
import Task from '../../components/Task';
import { addTask, doTask } from '../../store/modules/tasklist/actions';
import { 
  Container, 
  TaskList
} from '../../styles/pages/Home';

const schema = Yup.object().shape({
  taskName: Yup.string()
    .min(5, 'A tarefa deve ter conter mais de 5 caracteres')
    .required('Descrição da tarefa é obrigatória'),
})

interface FormValues {
  taskName: string;
}

export default function Home() {
  const dispatch = useDispatch();

  const tasklist = useSelector((state: IApplicationState) => state.tasklist)

  const handleSubmit = (
    values: FormValues, 
    formikHelpers: FormikHelpers<FormValues> 
  ) => {
    dispatch(addTask(values.taskName));
    formikHelpers.resetForm();
  };

  const handleToggleTaks = (id: string) => {
    dispatch(doTask(id));
  }

  return (
    <Container>
      <Head>
        <title>Todo Luby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Formik 
        initialValues={{
          taskName: ''
        } as FormValues} 
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnBlur={false}
      >
        {() => (
          <Form>
            <Field name="taskName">
              {({ 
                  field,
                  meta: { touched, error}
                }: FieldProps) => (
                <InputBar 
                  textInputProps={{
                    ...field
                  }} 
                  buttonProps={{
                    type: 'submit',
                  }} 
                  errorMessage={(touched && error) || undefined}
                />
              )}
            </Field>
          </Form>
        )}
      </Formik>
      <TaskList>
        {tasklist.tasks.map(task => (
          <Task 
            key={task.id} 
            description={task.description} 
            checked={task.done} 
            onClick={() => handleToggleTaks(task.id)}
          />
        ))}
      </TaskList>
    
    </Container>
  )
}
