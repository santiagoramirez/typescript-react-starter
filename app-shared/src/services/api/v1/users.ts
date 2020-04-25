import APIClient from '@app-shared/services/APIClient';

interface PaginationDTO {
  page: number;
  limit: number;
}

interface GetUsersDTO extends PaginationDTO {
  id: number;
}

const usersClient = new APIClient({
  baseUrl: 'http://localhost:3000/api/v1/users'
});

export async function getUsers(params: GetUsersDTO) {
  return await usersClient.get('/', { params });
}

export async function getUser(id: number) {
  return await usersClient.get(`/${id}`);
}

export async function deleteUser(id: number) {
  return await usersClient.delete(`/${id}`);
}
