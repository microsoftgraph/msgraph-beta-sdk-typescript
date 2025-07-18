/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOutlookTaskFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeOutlookTask, type BaseCollectionPaginationCountResponse, type OutlookTask } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CompletePostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OutlookTask[] | null;
}
/**
 * Provides operations to call the complete method.
 */
export interface CompleteRequestBuilder extends BaseRequestBuilder<CompleteRequestBuilder> {
    /**
     * Complete an Outlook task which sets the completedDateTime property to the current date, and the status property to completed. If you are completing a task in a recurring series, in the response, the task collection will contain the completed task in the series, and the next task in the series. The completedDateTime property represents the date when the task is finished. The time portion of completedDateTime is set to midnight UTC by default. By default, this operation (and the POST, GET, and PATCH task operations) returns date-related properties in UTC. You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone different than UTC.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CompletePostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks on 2021-02-20 and will be removed 2023-02-20
     * @see {@link https://learn.microsoft.com/graph/api/outlooktask-complete?view=graph-rest-beta|Find more info here}
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CompletePostResponse | undefined>;
    /**
     * Complete an Outlook task which sets the completedDateTime property to the current date, and the status property to completed. If you are completing a task in a recurring series, in the response, the task collection will contain the completed task in the series, and the next task in the series. The completedDateTime property represents the date when the task is finished. The time portion of completedDateTime is set to midnight UTC by default. By default, this operation (and the POST, GET, and PATCH task operations) returns date-related properties in UTC. You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone different than UTC.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks on 2021-02-20 and will be removed 2023-02-20
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CompletePostResponse}
 */
// @ts-ignore
export function createCompletePostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCompletePostResponse;
}
/**
 * The deserialization information for the current model
 * @param CompletePostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCompletePostResponse(completePostResponse: Partial<CompletePostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(completePostResponse),
        "value": n => { completePostResponse.value = n.getCollectionOfObjectValues<OutlookTask>(createOutlookTaskFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param CompletePostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCompletePostResponse(writer: SerializationWriter, completePostResponse: Partial<CompletePostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!completePostResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, completePostResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<OutlookTask>("value", completePostResponse.value, serializeOutlookTask);
}
/**
 * Uri template for the request builder.
 */
export const CompleteRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/outlook/tasks/{outlookTask%2Did}/complete";
/**
 * Metadata for all the requests in the request builder.
 */
export const CompleteRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CompleteRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCompletePostResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
