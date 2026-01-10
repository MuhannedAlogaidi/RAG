export function Example(props: any) {
  if (props.isActive == true) {
    return <div>Active</div>;
  }
  return <div>Inactive</div>;
}
