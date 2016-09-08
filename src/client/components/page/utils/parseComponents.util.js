export default function parseComponents(elements, path) {
  return elements.map((element, i) => {
    const key = `${path}.${i}.children`;
    const component = Widgets.get(element.component);
    const children = element.children && parseComponents(element.children, key) || null;
    return WrapInWidgetWrapper(component, children, key);
  });
}
