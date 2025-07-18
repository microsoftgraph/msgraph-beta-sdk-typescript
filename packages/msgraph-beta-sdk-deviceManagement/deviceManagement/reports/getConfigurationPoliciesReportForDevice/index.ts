/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetConfigurationPoliciesReportForDevicePostRequestBody}
 */
// @ts-ignore
export function createGetConfigurationPoliciesReportForDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetConfigurationPoliciesReportForDevicePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetConfigurationPoliciesReportForDevicePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetConfigurationPoliciesReportForDevicePostRequestBody(getConfigurationPoliciesReportForDevicePostRequestBody: Partial<GetConfigurationPoliciesReportForDevicePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getConfigurationPoliciesReportForDevicePostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getConfigurationPoliciesReportForDevicePostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getConfigurationPoliciesReportForDevicePostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getConfigurationPoliciesReportForDevicePostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getConfigurationPoliciesReportForDevicePostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getConfigurationPoliciesReportForDevicePostRequestBody.search = n.getStringValue(); },
        "select": n => { getConfigurationPoliciesReportForDevicePostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getConfigurationPoliciesReportForDevicePostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getConfigurationPoliciesReportForDevicePostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getConfigurationPoliciesReportForDevicePostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetConfigurationPoliciesReportForDevicePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The filter property
     */
    filter?: string | null;
    /**
     * The groupBy property
     */
    groupBy?: string[] | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The orderBy property
     */
    orderBy?: string[] | null;
    /**
     * The search property
     */
    search?: string | null;
    /**
     * The select property
     */
    select?: string[] | null;
    /**
     * The sessionId property
     */
    sessionId?: string | null;
    /**
     * The skip property
     */
    skip?: number | null;
    /**
     * The top property
     */
    top?: number | null;
}
/**
 * Provides operations to call the getConfigurationPoliciesReportForDevice method.
 */
export interface GetConfigurationPoliciesReportForDeviceRequestBuilder extends BaseRequestBuilder<GetConfigurationPoliciesReportForDeviceRequestBuilder> {
    /**
     * Invoke action getConfigurationPoliciesReportForDevice
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetConfigurationPoliciesReportForDevicePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getConfigurationPoliciesReportForDevice
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetConfigurationPoliciesReportForDevicePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetConfigurationPoliciesReportForDevicePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetConfigurationPoliciesReportForDevicePostRequestBody(writer: SerializationWriter, getConfigurationPoliciesReportForDevicePostRequestBody: Partial<GetConfigurationPoliciesReportForDevicePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getConfigurationPoliciesReportForDevicePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getConfigurationPoliciesReportForDevicePostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getConfigurationPoliciesReportForDevicePostRequestBody.groupBy);
    writer.writeStringValue("name", getConfigurationPoliciesReportForDevicePostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getConfigurationPoliciesReportForDevicePostRequestBody.orderBy);
    writer.writeStringValue("search", getConfigurationPoliciesReportForDevicePostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getConfigurationPoliciesReportForDevicePostRequestBody.select);
    writer.writeStringValue("sessionId", getConfigurationPoliciesReportForDevicePostRequestBody.sessionId);
    writer.writeNumberValue("skip", getConfigurationPoliciesReportForDevicePostRequestBody.skip);
    writer.writeNumberValue("top", getConfigurationPoliciesReportForDevicePostRequestBody.top);
    writer.writeAdditionalData(getConfigurationPoliciesReportForDevicePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetConfigurationPoliciesReportForDeviceRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getConfigurationPoliciesReportForDevice";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetConfigurationPoliciesReportForDeviceRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetConfigurationPoliciesReportForDeviceRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetConfigurationPoliciesReportForDevicePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
