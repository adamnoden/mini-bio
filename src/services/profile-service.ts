interface Profile {
  name: string;
  email: string;
  phone: string;
}
export const getProfile = async (userId: string) => {
  const response = await fetch(`https://api.example.com/profile/${userId}`);
  return response.json();
};

export const updateProfile = async (userId: string, profile: Profile) => {
  const response = await fetch(`https://api.example.com/profile/${userId}`, {
    method: "PUT",
    body: JSON.stringify(profile),
  });
  return response.json();
};
