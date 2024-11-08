export interface KafkaMessage<T> {
  headers: Map<string, string>;
  params: Map<string, string>;
  data: T;
}
